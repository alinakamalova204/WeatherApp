import s from './Header.module.scss'
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import Select  from 'react-select';
interface Props {}
const Header = (props: Props) => {
    const city = [
        { value: 'city1', label: 'Санкт-Петербург'},
        { value: 'city2', label: 'Москва'},
        { value: 'city3', label: 'Казань'},
        { value: 'city4', label: 'Сочи'},
        { value: 'city5', label: 'Красноярск'},
        { value: 'city6', label: 'Нижний Новгород'},
        { value: 'city7', label: 'Краснодар'},
        { value: 'city8', label: 'Магадан'},
        { value: 'city9', label: 'Калининград'},
        { value: 'city10', label: 'Иркутск'},
    ]
    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: 'rgba(71,147,255,0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100
        })
    }

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id='header-logo'/>
                </div>
                <div className={s.title}>React Weather</div>
            </div>
            <div className={s.wrapper}>
                <Select defaultValue={city[0]} styles={colorStyles} options={city}/>
            </div>
        </header>
    )
}
export default Header