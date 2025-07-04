import {Link} from 'react-router-dom';

function Navigation(){
    return (
        <nav style = {{padding: "10px", backgroundColor: "#ddd"}}>
            <Link to ="/" style={{marginRight: "10px"}}>홈</Link>
            <Link to ="/login" style={{marginRight: "10px"}}>로그인</Link>
            <Link to = "/signup">회원가입</Link>
        </nav>
    );
}

export default Navigation;