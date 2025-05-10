export default function CartPageLayout({
    children,
}: { children: React.ReactNode }) {
    return (
        <div className="p-8 flex flex-col gap-4 items-center">
            <h1 className="text-2xl font-bold">장바구니</h1>
            <div className="w-full max-w-6xl flex flex-col gap-4">
                {children}
            </div>
        </div>
    );
}
