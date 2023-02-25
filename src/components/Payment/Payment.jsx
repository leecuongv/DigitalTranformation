import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { DESCRIPTION, LOGO, NHOMDICHVUFULL, QR, TENDICHVU } from '../../data/enum'
import './Payment.scss'

function Payment() {
    const { nhomdv, dichvu } = useParams()

    const [data, setData] = useState({})

    useEffect(() => {
        if (nhomdv) {
            if (dichvu) {
                const chitietDV = NHOMDICHVUFULL.find(item =>
                    item.url.toLowerCase() === nhomdv.toLowerCase()
                )
                if (chitietDV) {
                    const name = TENDICHVU[dichvu.toUpperCase()]
                    const url = chitietDV.url
                    const description = DESCRIPTION[dichvu + 'Description']
                    const QRs = QR['QR' + dichvu.toUpperCase()]
                    setData({ name, description, QRs, url })
                    document.title = TENDICHVU[dichvu.toUpperCase()]
                }

            }
        }
        else {

        }

    }, [nhomdv, dichvu])


    return (
        <>
            <div className='payment'>
                <div className="payment__body">
                    {/* <div className="payment__title">

                        <Link to={`/${data?.url}`} className="back">
                            {`<Quay lại`}
                        </Link>
                        <div className='payment__title--name'>
                            {data?.name}
                        </div>
                    </div> */}
                    <div className="payment__title">
                        <Link to={`/${data?.url}`}>
                            {data?.name}
                        </Link>

                    </div>
                    <div className="payment__content">
                        {data?.description?.split('\n').map(line =>
                            <>
                                <p>
                                    {line}
                                </p>
                            </>
                        ) || 'Không có mô tả'}
                    </div>
                    <div className="payment__qr">
                        {data?.QRs?.map(item =>
                            <img src={item} alt="" />
                        )}

                    </div>
                    {

                        <Link to={`/${data?.url}`} className='payment__home'>
                            Quay lại
                        </Link>
                    }
                    {

                        <Link to={'/'} className="payment__back">
                            TRANG CHỦ
                        </Link>


                    }
                </div>

            </div>
        </>
    )
}

export default Payment