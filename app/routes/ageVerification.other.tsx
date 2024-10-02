import { useNavigate } from "@remix-run/react"

export default function other() {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div className='max-w-md mx-auto text-white'>

            <header className="text-center py-3 sticky top-0 bg-neutral-950">
                <div className="flex">
                    <button onClick={goBack}>
                        <p className="pl-4"><span className="font-bold">＜</span>戻る</p>
                    </button>
                    <p className="absolute left-1/2 -translate-x-1/2 font-bold whitespace-nowrap">本人確認書類として利用可能なもの</p>
                </div>
            </header>

            <div className="mx-4 mb-20 font-bold">
                <ul>
                    <li>運転免許書</li>
                    <li>パスポート</li>
                    <li>健康保険所</li>
                    <li>マイナンバーカード</li>
                    <li>学生証</li>

                    <li className="mt-5">住民基本台帳カード</li>
                    <li>個人番号カード</li>
                    <li>国民年金手帳</li>
                    <li>年金手帳</li>
                    <li>年金証書</li>
                    <li>身体障害者手帳</li>
                    <li>療育手帳</li>
                    <li>精神障害者保健福祉手帳</li>
                    <li>共済組合員証</li>

                    <li>共済年金または恩給等の証書</li>
                    <li className="mt-5">外国人登録証明書</li>
                    <li>在留カード</li>
                    <li>特別永住者証明書</li>
                    <li>タスポカード</li>

                    <li className="mt-5">船員手帳</li>
                    <li>海技免状</li>
                    <li>小型船舶操縦免許証</li>
                    <li>猟銃・空気銃所持許可証</li>
                    <li>戦傷病者手帳</li>
                    <li>宅地建物取引士証</li>
                    <li>電気工事士免状</li>
                    <li>無線従事者免許証</li>
                    <li>認定電気工事従事者認定証</li>
                    <li>特種電気工事資格者認定証</li>
                    <li>耐空検査員の証</li>
                    <li>航空従事者技能証明書</li>
                    <li>運航管理者技能検定合格証明書</li>
                    <li>動力車操縦者運転免許証</li>
                    <li>教習資格認定証</li>
                    <li>官公庁や特殊法人等が発行した身分証明書で写真付のもの</li>
                    <li>運転経歴証明書</li>
                </ul>
            </div>

        </div>
    )
}
