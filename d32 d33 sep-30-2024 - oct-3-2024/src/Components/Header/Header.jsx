import HeaderCSS from './Header.module.css';

const Header = () => {
    return (
        <div className='text-center py-5 bg-stone-300'>
            <h2 className={`${HeaderCSS.seminarChole} ${HeaderCSS.seminarBondho}`}>This is a header</h2>
        </div>
    );
};

export default Header;