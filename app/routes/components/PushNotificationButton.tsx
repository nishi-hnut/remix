import { useState } from "react"

export default function PushNotificationButton() {

    const [checked, setChecked] = useState(false)

    const handleToggle = () => {
        setChecked(!checked)
    }

    return (
        <div className="mx-4 mt-5">
            <p className="text-sm ml-4 text-gray-500">プッシュ通知(個別に設定可能)</p>
            <div className="bg-neutral-950 rounded-xl py-3 px-5">
                <div className="flex items-center justify-between border-b border-gray-600 border-opacity-20 pb-2">
                    <p className="text-base">メール通知</p>
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            onClick={handleToggle}
                            type="checkbox"
                            className="sr-only peer"
                            style={{ outline: 'none' }} />
                        <div className="relative w-12 h-7 bg-gray-200 dark:bg-gray-700 peer-checked:bg-green-600 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600" />
                    </label>
                </div>

                <div className="flex items-center justify-between border-b border-gray-600 border-opacity-20 py-2">
                    <p className="text-base">いいね通知</p>
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            onClick={handleToggle}
                            type="checkbox"
                            className="sr-only peer"
                            style={{ outline: 'none' }} />
                        <div className="relative w-12 h-7 bg-gray-200 dark:bg-gray-700 peer-checked:bg-green-600 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600" />
                    </label>
                </div>

                <div className="flex items-center justify-between border-b border-gray-600 border-opacity-20 py-2">
                    <p className="text-base">足あと通知</p>
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            onClick={handleToggle}
                            type="checkbox"
                            className="sr-only peer"
                            style={{ outline: 'none' }} />
                        <div className="relative w-12 h-7 bg-gray-200 dark:bg-gray-700 peer-checked:bg-green-600 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600" />
                    </label>
                </div>

                <div className="flex items-center justify-between pt-2">
                    <p className="text-base">その他の通知</p>
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            onClick={handleToggle}
                            type="checkbox"
                            className="sr-only peer"
                            style={{ outline: 'none' }} />
                        <div className="relative w-12 h-7 bg-gray-200 dark:bg-gray-700 peer-checked:bg-green-600 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600" />
                    </label>
                </div>
            </div>
        </div>
    )
}
