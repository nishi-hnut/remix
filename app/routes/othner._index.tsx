import { useNavigate } from "@remix-run/react"
import { useState } from "react"

export default function othner() {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const [checked, setChecked] = useState(false)

    const handleToggle = () => {
        setChecked(!checked)
    }

    return (
        <div className="max-w-md mx-auto text-white mb-20">
            <header className="text-center py-3 sticky top-0 bg-neutral-950">
                <div className="flex">
                    <button onClick={goBack}>
                        <p className="pl-4"><span className="font-bold">＜</span>戻る</p>
                    </button>
                    <p className="absolute left-1/2 -translate-x-1/2 font-bold whitespace-nowrap">その他</p>
                </div>
            </header>

            <div className="bg-neutral-950 w-full h-52">
                <div className="mx-8 pt-4">
                    <div className="flex justify-between">
                        <div>
                            <p className="font-bold">名前表示</p>
                            <div className="flex items-center pt-0.5">
                                <img className="w-8 h-8" src="p.png" alt="" />
                                <p>312</p>
                            </div>
                        </div>

                        <img className="w-14 h-14 object-cover rounded-full" src="neko.jpg" alt="" />
                    </div>

                    <div className="flex mt-4">
                        <div className="bg-neutral-900 text-center w-1/2 rounded-xl mr-5 px-4">
                            <p>ポイント追加</p>
                        </div>

                        <div className="bg-neutral-900 text-center w-1/2 rounded-xl ml-5 py-3 px-4">
                            <p>プロフィール編集</p>
                        </div>
                    </div>

                    <div className="bg-neutral-900 text-center mt-4 rounded-lg h-10 py-2">
                        <p>年齢確認</p>
                    </div>
                </div>
            </div>

            <div className="mx-4 mt-5">
                <p className="text-sm ml-4 text-gray-500">通話</p>
                <div className="bg-neutral-950 rounded-xl py-3 px-5">
                    <div className="flex justify-between border-b border-gray-600 border-opacity-20 pb-3">
                        <p className="text-base">着信許可(音声)</p>
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                onClick={handleToggle}
                                type="checkbox"
                                className="sr-only peer"
                                style={{ outline: 'none' }} />
                            <div className="relative w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-checked:bg-green-600 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600" />
                        </label>
                    </div>

                    <div className="flex justify-between border-b border-gray-600 border-opacity-20 py-3">
                        <p className="text-base">着信許可(ビデオ)</p>
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                onClick={handleToggle}
                                type="checkbox"
                                className="sr-only peer"
                                style={{ outline: 'none' }} />
                            <div className="relative w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-checked:bg-green-600 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600" />
                        </label>
                    </div>

                    <div className="flex justify-between border-opacity-20 py-3">
                        <p className="text-base">通話履歴</p>
                        <p>＞</p>
                    </div>
                </div>
            </div>

            <div className="mx-4 mt-5">
                <p className="text-sm ml-4 text-gray-500">プッシュ通知(個別に設定可能)</p>
                <div className="bg-neutral-950 rounded-xl py-3 px-5">
                    <div className="flex justify-between border-b border-gray-600 border-opacity-20 pb-3">
                        <p className="text-base">メール通知</p>
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                onClick={handleToggle}
                                type="checkbox"
                                className="sr-only peer"
                                style={{ outline: 'none' }} />
                            <div className="relative w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-checked:bg-green-600 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600" />
                        </label>
                    </div>

                    <div className="flex justify-between border-b border-gray-600 border-opacity-20 py-3">
                        <p className="text-base">いいね通知</p>
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                onClick={handleToggle}
                                type="checkbox"
                                className="sr-only peer"
                                style={{ outline: 'none' }} />
                            <div className="relative w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-checked:bg-green-600 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600" />
                        </label>
                    </div>

                    <div className="flex justify-between border-b border-gray-600 border-opacity-20 py-3">
                        <p className="text-base">足あと通知</p>
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                onClick={handleToggle}
                                type="checkbox"
                                className="sr-only peer"
                                style={{ outline: 'none' }} />
                            <div className="relative w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-checked:bg-green-600 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600" />
                        </label>
                    </div>

                    <div className="flex justify-between pt-3">
                        <p className="text-base">その他の通知</p>
                        <label className="inline-flex items-center cursor-pointer">
                            <input
                                onClick={handleToggle}
                                type="checkbox"
                                className="sr-only peer"
                                style={{ outline: 'none' }} />
                            <div className="relative w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-checked:bg-green-600 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600" />
                        </label>
                    </div>
                </div>
            </div>

            <div className="mx-4 mt-5">
                <p className="text-sm ml-4 text-gray-500">個人設定</p>
                <div className="bg-neutral-950 rounded-xl py-3 px-5">
                    <div className="flex justify-between border-b border-gray-600 border-opacity-20 py-3">
                        <p className="text-base">自分の投稿履歴</p>
                        <p>＞</p>
                    </div>

                    <div className="flex justify-between py-3">
                        <p className="text-base">ブロックリスト</p>
                        <p>＞</p>
                    </div>
                </div>
            </div>

            <div className="mx-4 mt-5">
                <p className="text-sm ml-4 text-gray-500">サポート</p>
                <div className="bg-neutral-950 rounded-xl py-3 px-5">
                    <div className="flex justify-between border-b border-gray-600 border-opacity-20 py-3">
                        <p className="text-base">お知らせ</p>
                        <p>＞</p>
                    </div>

                    <div className="flex justify-between border-b border-gray-600 border-opacity-20 py-3">
                        <p className="text-base">ポイント説明</p>
                        <p>＞</p>
                    </div>

                    <div className="flex justify-between border-b border-gray-600 border-opacity-20 py-3">
                        <p className="text-base">NG行為</p>
                        <p>＞</p>
                    </div>

                    <div className="flex justify-between py-3">
                        <p className="text-base">お問い合わせ</p>
                        <p>＞</p>
                    </div>
                </div>
            </div>

            <div className="mx-4 mt-5">
                <p className="text-sm ml-4 text-gray-500">アプリ利用について</p>
                <div className="bg-neutral-950 rounded-xl py-3 px-5">
                    <div className="flex justify-between border-b border-gray-600 border-opacity-20 py-3">
                        <p className="text-base">利用規約</p>
                        <p>＞</p>
                    </div>

                    <div className="flex justify-between border-b border-gray-600 border-opacity-20 py-3">
                        <p className="text-base">プライバシーポリシー</p>
                        <p>＞</p>
                    </div>

                    <div className="flex justify-between border-b border-gray-600 border-opacity-20 py-3">
                        <p className="text-base">アプリのバージョン</p>
                        <p>1.2</p>
                    </div>

                    <div className="text-center py-3">
                        <p className="text-base">退会する</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
