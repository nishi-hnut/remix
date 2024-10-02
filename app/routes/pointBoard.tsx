export default function pointBoard() {
    return (
        <div className="max-w-md mx-auto bg-black text-white">

            <header className="text-center py-6 sticky">
                <p className="font-bold">ポイント表</p>
            </header>

            <div className="mt-10 bg-neutral-800">

                <div className="border-t border-b border-gray-300 border-opacity-20 py-7">
                    <div className="flex justify-between mx-4">
                        <p>メッセージ送信</p>
                        <p>60pt</p>
                    </div>
                </div>

                <div className="border-t border-b border-gray-300 border-opacity-20 py-7">
                    <div className="flex justify-between mx-4">
                        <p>スタンプ送信</p>
                        <p>60pt</p>
                    </div>
                </div>

                <div className="border-t border-b border-gray-300 border-opacity-20 py-7">
                    <div className="flex justify-between mx-4">
                        <p>画像付きメッセージ(開封・送信)</p>
                        <p>60pt</p>
                    </div>
                </div>

                <div className="border-t border-b border-gray-300 border-opacity-20 py-7">
                    <div className="flex justify-between mx-4">
                        <p>ボイス付きメッセージ(開封・送信)</p>
                        <p>60pt</p>
                    </div>
                </div>

                <div className="border-t border-b border-gray-300 border-opacity-20 py-7">
                    <div className="flex justify-between mx-4">
                        <p>動画付きメッセージ(開封・送信)</p>
                        <p>160pt</p>
                    </div>
                </div>

                <div className="border-t border-b border-gray-300 border-opacity-20 py-7">
                    <div className="flex justify-between mx-4">
                        <p>音声通話(1分)</p>
                        <p>160pt</p>
                    </div>
                </div>

                <div className="border-t border-b border-gray-300 border-opacity-20 py-7">
                    <div className="flex justify-between mx-4">
                        <p>ビデオ通話(1分)</p>
                        <p>280pt</p>
                    </div>
                </div>

            </div>
        </div >
    )
}
