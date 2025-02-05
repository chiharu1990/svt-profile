import Image from 'next/image';
import jsonData from '../jsonData.json';
import { pathwayGothicOne } from '../../utils/font';
import { Birthday } from './components/Birthday';

type Member = {
    name: string;
    jpName: string;
    realName: string;
    jpRealName: string;
    nickName: string[];
    emoji: string;
    birthday: string;
};

type MemberType = {
    seventeen: Member[];
};

export default function Home() {
    const data: MemberType = jsonData;
    return (
        <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <h2 className={`${pathwayGothicOne.className} text-6xl mb-12 text-blue`}>MEMBER</h2>
            {data.seventeen.map((item) => (
                <div key={item.name} className="grid grid-cols-2 gap-4 mb-10">
                    <Image src="/images/dummy.png" alt="image" width={300} height={300}></Image>
                    <div>
                        <div className="mb-4">
                            <p className={`${pathwayGothicOne.className} text-5xl`}>
                                {item.name}
                                <span className="text-2xl ml-4">{item.jpName}</span>
                            </p>
                        </div>
                        <div className="mb-4">
                            <h4 className="text-base font-bold mb-1">本名</h4>
                            <p className="text-2xl">
                                {item.realName}
                                <span className="ml-4">{item.jpRealName}</span>
                            </p>
                        </div>
                        <div className="flex mb-4">
                            <div>
                                <h4 className="text-base font-bold mb-1">ニックネーム</h4>
                                <p className="text-2xl">{item.nickName.join(' / ')}</p>
                            </div>
                            <div className="ml-6">
                                <h4 className="text-base font-bold mb-1">絵文字</h4>
                                <p className="text-2xl">{item.emoji}</p>
                            </div>
                        </div>
                        <div>
                            <Birthday birthday={item.birthday} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
