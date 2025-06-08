import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import type { CategoryGroup } from "@/types/api";

interface CategoryRow {
    group_id: number;
    group_title: string;
    category_id: number | null;
    category_name: string | null;
    sort_order: number | null;
}

export async function GET() {
    try {
        // 카테고리 그룹과 카테고리를 함께 조회
        const query = `
      SELECT 
        cg.id as group_id,
        cg.title as group_title,
        c.id as category_id,
        c.name as category_name,
        c.sort_order
      FROM category_groups cg
      LEFT JOIN categories c ON cg.id = c.group_id AND c.is_deleted = false
      WHERE cg.is_deleted = false
      ORDER BY cg.id, c.sort_order, c.id
    `;

        const result = await db.query(query);

        // 그룹별로 카테고리 정리
        const groupMap = new Map<number, CategoryGroup>();

        for (const row of result.rows as CategoryRow[]) {
            if (!groupMap.has(row.group_id)) {
                groupMap.set(row.group_id, {
                    id: row.group_id,
                    title: row.group_title,
                    categories: [],
                });
            }

            if (row.category_id && row.category_name && row.sort_order !== null) {
                const group = groupMap.get(row.group_id);
                if (group) {
                    group.categories.push({
                        id: row.category_id,
                        name: row.category_name,
                        group_id: row.group_id,
                        sort_order: row.sort_order,
                    });
                }
            }
        }

        const categoryGroups = Array.from(groupMap.values());

        // 강도와 컵사이즈 분리
        const intensities = categoryGroups.find(group => group.id === 1)?.categories || [];
        const cupSizes = categoryGroups.find(group => group.id === 2)?.categories || [];

        return NextResponse.json({
            data: {
                intensities,
                cupSizes,
            },
            success: true,
        });
    } catch (error) {
        console.error("카테고리 조회 오류:", error);
        return NextResponse.json(
            {
                message: "카테고리 조회 중 오류가 발생했습니다.",
                success: false,
            },
            { status: 500 },
        );
    }
}
