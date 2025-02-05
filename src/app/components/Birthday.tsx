export const Birthday = (props: { birthday: string }) => {
    const getAge = (birthdayString: string) => {
        const birthDate = new Date(birthdayString);
        const today = new Date();

        let age: number = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        return age;
    };

    const getKazoeAge = (birthdayString: string) => {
        const birthDate = new Date(birthdayString);
        const today = new Date();
        const birthYear = birthDate.getFullYear();
        const currentYear = today.getFullYear();

        return currentYear - birthYear + 1;
    };

    const formatDate = (birthdayString: string) => {
        const date = new Date(birthdayString);
        return date.toLocaleDateString('ja-JP', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };

    return (
        <>
            <h4 className="text-base font-bold mb-1">誕生日</h4>
            <p className="text-2xl">
                {formatDate(props.birthday)}
                <span className="ml-2">{getAge(props.birthday)}歳</span>
                <span className="text-xl">（{getKazoeAge(props.birthday)}歳）</span>
            </p>
        </>
    );
};
