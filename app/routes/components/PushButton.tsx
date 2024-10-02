import { useState } from "react";

export default function PushButton() {

    const [checked, setChecked] = useState(false);

    const handleToggle = () => {
        setChecked(!checked);
    };

    return (
        <div className="mx-4 mt-5">
            <p className="text-xs ml-4 text-gray-500">プッシュ通知(個別に設定可能)</p>
            <div className="bg-red-950 rounded-xl py-3 px-5">
                <div className="flex justify-between">
                    <p className="text-sm">メール通知</p>
                    <label className="inline-flex items-center cursor-pointer">
                        <input
                            onClick={handleToggle}
                            type="checkbox"
                            value=""
                            className="sr-only peer"
                            style={{ outline: 'none' }} />
                        <div
                            className="relative w-11 h-6 bg-gray-200 dark:bg-gray-700 peer-checked:bg-green-600 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600">
                        </div>
                    </label>

                </div>
            </div>
        </div>
    )
}
