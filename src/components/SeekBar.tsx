import './SeekBar.css'
import MenuImg from "../assets/menu.png";
import LogoImg from "../assets/on_platform_logo_dark 1.png";
import LupaImg from "../assets/lupa.svg";
import Cast from '../assets/cast.png'
import Avatar from '../assets/Avatar.png'


export default function SeekBar() {
    return (
        <>
            <div className='seekbar'>
                <div className='menu_logo'>
                        <img src={MenuImg} alt="" className='img_menu' />
                        <img src={LogoImg} alt="" className='img_logo' />
                </div>
                <div className='box_busqueda'>
                    <img src={LupaImg} className="lupa_img" />
                    <input type="text" className="inp_search" placeholder="Search..." />
                
                </div>
                <div className='cast_avatar'>
                    <img src={Cast} alt=""  className='cast_img' />
                    <img src={Avatar} alt=""  className='avatar_img'/>
                </div>
            </div>
        </>
    )

  
}