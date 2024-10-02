import { Link } from "@remix-run/react"
import PushNotificationButton from "./components/PushNotificationButton"

export default function ageVerification() {
    return (
        <div className="max-w-md mx-auto bg-black text-white mb-60">

            <header className="text-center py-3 sticky top-0 bg-neutral-950">
                <div className="flex">
                    <p className="pl-4"><span className="font-bold">＜</span>戻る</p>
                    <p className="absolute left-1/2 -translate-x-1/2 font-bold">年齢確認</p>
                </div>
            </header>

            <div className="mt-5 mx-4">
                <p className="text-xs">青少年がトラブルに巻き込まれることを防ぐため、18歳以上であることを確認させていただいております。</p>
            </div>

            <div className="mt-10">
                <div className="relative w-full h-14 bg-neutral-950">
                    <p className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap">①年齢確認書類を１つ用意する</p>
                </div>

                <img src="/public/ra_age_verification_image.png" alt="" />

                <Link to="/ageVerification/other">
                    <p className="text-sm text-end text-purple-400 pt-2 pr-2">その他の書類 ▶</p>
                </Link>
            </div>

            <div className="mt-10">
                <div className="relative w-full h-14 bg-neutral-950">
                    <p className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap">②年齢確認書類を撮影する</p>
                </div>

                <div className="text-xs mt-2 mx-4">
                    <p>つぎの3つが必ず写るように撮影してください</p>

                    <ul className="mt-4">
                        <li>・生年月日</li>
                        <li>・証明書の名称</li>
                        <li>・発行者名</li>
                    </ul>

                    <div className="mt-4">
                        <p>※個人情報(顔写真や名前、住所など)は加工ツールで塗りつぶせます。</p>
                        <p>※プロフィールの生年月日と同じである必要はありません。</p>
                    </div>
                </div>
            </div>

            <div className="mt-10">
                <div className="relative w-full h-14 bg-neutral-950">
                    <p className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-nowrap">③送信して完了</p>
                </div>

                <div className="text-xs mt-2 mx-4">
                    <p>年齢確認は通常、３分~24時間以内に完了します。</p>
                    <p>完了すると公式サポートよりアプリ内のメールにてお知らせします。</p>
                    <p className="mt-4">※いただいた画像は年齢確認のためだけに使用し、転用・流出はいたしません。</p>
                </div>
            </div>

            <div className="text-center mt-10">
                <button className="py-2 px-16 rounded-md bg-purple-600">
                    <p className="">証明書を撮影する</p>
                </button>
            </div>

            <PushNotificationButton />
        </div>
    )
}
