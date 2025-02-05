type ProfileType = {
    children: React.ReactNode;
    item: string | string[];
};
export const ProfileItem = (props: ProfileType) => {
    const { children, item } = props;
    return (
        <>
            <h4 className="text-base font-bold mb-1">{children}</h4>
            <p className="text-2xl">{item}</p>
        </>
    );
};
