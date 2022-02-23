import './styles.css';
function Register() {
  const element=(
    <>
        <div className="header">
          <a href="#" style={{float:'left',margin:'0.75% 1%'}}>
            <div className="card">
              <img src="https://i.postimg.cc/ZK7nCwqp/124.png" style={{width:'30px',height:'30px'}} />
              <img src="https://i.postimg.cc/g2jDZtHW/125.png" className="img-top" />
            </div>
          </a>
          <a href="#" style={{float:'left',margin:'0.75% 0%'}}>
            <div className="card">
              <img src="https://i.postimg.cc/3RzRtRP1/sh1.png" style={{width:'30px',height:'30px'}} />
              <img src="https://i.postimg.cc/RV494KQf/sh2.png" className="img-top" />
            </div>
          </a>
          <a href="#" style={{float:'left',margin:'0.75% 1%'}}>
            <div class="card">
              <img src="https://i.postimg.cc/QCjPGkGd/se.png" style={{width:'30px',height:'30px'}} />
              <img src="https://i.postimg.cc/cLPb4Nyj/se2.png" className="img-top" />
            </div>
          </a>
          <a href="#" style={{float:'left',margin:'0.75% 30% 0.75%'}}>
            <img src="https://i.postimg.cc/sXmmWkq3/logo.png" style={{width:'30px',height:'30px'}} />
          </a>
          <nav role="navigation">
            <ul>
              <li>
                <a href="#" aria-haspopup="true" style={{float:'right',margin:'0.75% 10% 0.75% 20%'}}>
                  <img src="https://i.postimg.cc/qvHKkmDw/libf.png" style={{width:'35px',height:'35px'}} />
                </a>
                <ul className="dropdown" aria-label="submenu">
                  <li><a href="#">خانه <img src="https://i.postimg.cc/1X6pHbYg/ho.png" style={{width:'20px',height:'20px',margin:'3% 5% auto 0'}}/></a></li>
                  <hr/>
                  <li><a href="#">دسته بندی <img src="https://i.postimg.cc/tCN64d0H/cat.png" style={{width:'20px',height:'20px',margin:'auto 5% auto 0'}}/></a></li>
                  <hr/>
                  <li><a href="#">برترین نویسندگان <img src="https://i.postimg.cc/253cryN1/au.png" style={{width:'20px',height:'20px',margin:'auto 5% auto 0'}}/></a></li>
                  <hr/>
                  <li><a href="#">پرفروش ترین ها <img src="https://i.postimg.cc/x8RdnRXx/sale.png" style={{width:'20px',height:'20px',margin:'auto 5% auto 0'}}/></a></li>
                  <hr></hr>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
        <img src="https://i.postimg.cc/j2dbQrjc/hell.png" style={{width:'600px',height:'489px',margin:'10% 10%',float:'right'}}/>
        <div className="box">
          <p id="pera"><br/>!به کتابخانه خوش آمدید</p>
          <img src="https://i.postimg.cc/7YGcvLj7/123.png" alt="user" style={{margin:'1% 40% 5% 42%'}} />
          <form >
            <center>
                <input className="label" type="email" id="fname" name="fname" placeholder="ایمیل" required></input>
                <input className="label" type="text" id="fname" name="fname" placeholder="نام کاربری" required></input>
                <input className="label" type="password" id="password" name="password" placeholder="رمز عبور" required></input>
                <input className="loginbtn" type="submit" value="ثبت نام"></input>
            </center>
          </form>
          <br/>
          <h3 style={{margin:'-3% 18% -20% -43%',float:'right'}}>حساب کاربری دارید؟</h3>
          <a href="login" action="Login.js">
            <center>
                <h3 style={{margin:'-3% -25% -25% -25%'}} className="common">ورود</h3>
            </center>
          </a>
        </div>
    </>
  )
  return (element);
}
export default Register;