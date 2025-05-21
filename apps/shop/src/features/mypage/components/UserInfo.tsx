import EditUserInfo from "./EditUserInfo";

export type UserInfoType = {
    name: string;
    nickname: string;
    email: string;
};

const userInfo = {
    name: "김팔공",
    nickname: "팔공팔공일",
    email: "user1234@kakao.com",
};

export default function UserInfo() {
    return (
        <div className="flex justify-between items-center overflow-hidden gap-2.5 px-6 py-4 rounded-xl bg-[#f7f7f8]">
            <div className="flex flex-col justify-start items-start relative gap-2">
                <p className="text-lg font-bold text-left text-black">{userInfo.nickname}</p>
                <div className="flex justify-start items-center relative gap-1 text-[#46474b]">
                    <p className="text-sm">{userInfo.name}</p>
                    <p className="text-xs text-left text-[#DADADD]">|</p>
                    <p className="text-sm">{userInfo.email}</p>
                </div>
            </div>
            <EditUserInfo user={userInfo} />
        </div>
    );
}
