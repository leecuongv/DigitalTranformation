import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { LOGO, NHOMDICHVUFULL } from '../../data/enum'
import './Menu.scss'

function Menu() {
    const { nhomdv, dichvu } = useParams()

    const [data, setData] = useState({})

    useEffect(() => {
        if (nhomdv) {
            const dsDichvu = NHOMDICHVUFULL.find(item =>
                item.url.toLowerCase() === nhomdv.toLowerCase()
            )
            if (dsDichvu) {
                setData(dsDichvu)
            }
        }
        else {
            setData({
                name: "Tuổi trẻ HCMUTE Tiên phong chuyển đổi số",
                children: NHOMDICHVUFULL
            })
        }

    }, [nhomdv, dichvu])


    return (
        <>
            <div className='menu'>
                <div className="menu__body">
                    <div className="menu__content">
                        {data?.name}
                    </div>
                    <div className="menu__chooses">
                        {
                            data?.children?.map(item =>
                                <Link className="menu__item" to={
                                    nhomdv ?
                                        `/${nhomdv}/${item.url?.toLowerCase()}`
                                        : `/${item.url?.toLowerCase()}`}>
                                    <button className={`btn menu__item ${!nhomdv?'none-img':''}`}>
                                        {nhomdv &&<img src={LOGO['LOGO' + item.url?.toUpperCase()]} alt="" />}
                                        
                                        {item.name}
                                    </button>
                                </Link>
                            )
                        }
                    </div>

                    {
                        nhomdv && 
                        <Link to={'/'} className='btn__home'>
                            TRANG CHỦ
                        </Link>
                    }
                </div>

            </div>
        </>
    )
}

export default Menu