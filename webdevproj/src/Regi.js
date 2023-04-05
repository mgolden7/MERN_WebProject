import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { FaCheck, FaTimes, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9-_]+[@{1}][a-zA-Z]+([.](com|org))\b/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const Registration = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [matchEmail, setMatchEmail] = useState('');
    const [validEmailMatch, setValidEmailMatch] = useState(false);
    const [matchEmailFocus, setMatchEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
    
    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState('false');

    useEffect(() => {
        userRef.current.focus();
    }, []);
    
    useEffect(() => {
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user])

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        console.log(result);
        console.log(email);
        setValidEmail(result);
        const match = (email === matchEmail);
        setValidEmailMatch(match);
    }, [email, matchEmail])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = (pwd === matchPwd);
        setValidMatch(match);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [user, email, matchEmail, pwd, matchPwd])

    const submitForm = () => {
        console.log('form submitted')
    }

  return (
    <div className='registration'>
        
        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live='assertive'>{errMsg}</p>
        
        <form className='registrationForm'>Create Account
            <div className='registrationFormQuestions'>
            
            
                <div className='labelInputGroup'>
                    <label className='inputLabel' htmlFor='userName'>name (username)
                        <div className='checkExIcons'>
                            <span className="greenCheck">
                                {validName ? <FaCheck className='FaCheck'/> : ""}
                            </span>
                            <span className="redEx">
                                {!validName && user ? <FaTimes className='FaTimes'/> : " "}                    
                            </span>   
                        </div>
                    </label>    
                    <input 
                        type='text' 
                        id='userName' 
                        placeholder='username'
                        ref={userRef}
                        autoComplete='off'
                        onChange={(e) => setUser(e.target.value)}
                        required
                        aria-invalid={validName ? "false" : "true"}
                        aria-describedby='uidnote'
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                        >
                    </input>
                        {!validName && user ? 
                            <p id='uidnote' className='uidnote'>
                                <FaInfoCircle className='uidnoteIcon'/>
                                <p className='uidnoteText' >
                                Must contain 4 to 24 Characters.<br/>
                                Must begin with a letter.<br/>
                                Letters, numbers, underscores, hyphens allowed.
                                </p>
                            </p>
                        : " "}
                </div>
                    
            
                <div className='labelInputGroup'>
                    <label className='inputLabel' htmlFor='email'>email
                        <div className='checkExIcons'>
                            <span className="greenCheck">
                                {validEmail ? <FaCheck className='FaCheck'/> : ""}
                            </span>
                            <span className="redEx">
                                {!validEmail && email ? <FaTimes className='FaTimes'/> : " "}                    
                            </span>   
                        </div>
                    </label>
                        <input 
                            type='text' 
                            id='email' 
                            placeholder='email'
                            ref={userRef}
                            autoComplete='on'
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            aria-invalid={validEmail ? "false" : "true"}
                            aria-describedby='uidnote'
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                            >
                        </input>
                            {!validEmail && email ? 
                                <p id='uidnote' className='uidnote'>
                                    <FaInfoCircle className='uidnoteIcon'/>
                                    <p className='uidnoteText'>
                                    Must be a legitimate email (for pwd recovery)<br/>
                                    Must contain an @.<br/>
                                    Must end in .com.
                                    </p>
                                </p>
                            : ""}
                </div>
                
                
                <div className='labelInputGroup'>
                    <label className='inputLabel' htmlFor='confirmEmail'>confirm email
                        <div className='checkExIcons'>
                            <span className="greenCheck">
                                {validEmailMatch && matchEmail ? <FaCheck className='FaCheck'/> : ""}
                            </span>
                            <span className="redEx">
                                {!validEmailMatch && matchEmail ? <FaTimes className='FaTimes'/> : " "}                    
                            </span>   
                        </div>   
                    </label>
                        <input 
                            type='text' 
                            id='confirmEmail' 
                            placeholder='confirm email'
                            onChange={(e) => setMatchEmail(e.target.value)}
                            required
                            aria-invalid={validEmailMatch ? "false" : "true"}
                            aria-describedby='uidnote'
                            onFocus={() => setMatchEmailFocus(true)}
                            onBlur={() => setMatchEmailFocus(false)}
                            >
                        </input>
                </div>
                
            
                <div className='labelInputGroup'>
                    <label className='inputLabel' htmlFor='password'>password
                        <div className='checkExIcons'>
                            <span className="greenCheck">
                                {validPwd ? <FaCheck className='FaCheck'/> : ""}
                            </span>
                            <span className="redEx">
                                {!validPwd && pwd ? <FaTimes className='FaTimes'/> : " "}                    
                            </span>   
                        </div>  
                    </label>
                        <input 
                            type='password' 
                            id='password' 
                            placeholder='password'
                            onChange={(e) => setPwd(e.target.value)}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby='uidnote'
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        >
                        </input>
                            {!validPwd && pwdFocus ? 
                                <p id='uidnote' className='uidnote'>
                                    <FaInfoCircle className='uidnoteIcon'/>
                                    <p className='uidnoteText'>
                                    Must contain at least one lowercase letter,<br/>
                                    one uppercase letter,<br/> one number,<br/>
                                    one of the following special characters (
                                        <span aria-label='exclamation point'>!</span> 
                                        <span aria-label='at or ampersand symbol'>@</span>
                                        <span aria-label='hashtage or number sign'>#</span>
                                        <span aria-label='dollar sign'>$</span>
                                        <span aria-label='percent sign'>%</span>),<br/>
                                    and be 8 - 24 characters long
                                    </p>
                                </p>
                            : ""}
                </div>
                
            
                <div className='labelInputGroup'>
                    <label className='inputLabel' htmlFor='confirmPassword'>confirm password
                        <div className='checkExIcons'>
                            <span className="greenCheck">
                                {validMatch && matchPwd ? <FaCheck className='FaCheck'/> : ""}
                            </span>
                            <span className="redEx">
                                {!validMatch && matchPwd ? <FaTimes className='FaTimes'/> : " "}                    
                            </span>   
                        </div>                  
                    </label>
                        <input 
                            type='password' 
                            id='confirmPassword' 
                            placeholder='confirm password'
                            onChange={(e) => setMatchPwd(e.target.value)}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby='uidnote'
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                            >
                            </input>
                </div>
            
            </div>
                <button 
                    className='registrationSubmitButton' 
                    disabled={!validName || !validEmail || !validEmailMatch || !validPwd || !validMatch ? true : false}
                    onClick={submitForm} 
                >submit
                </button>
            
            <br/>
                <p className='linkToAuthP'>already have an account?</p>
                <Link to="/authentication" className='linkToAuth'>Sign In</Link>
        </form>
    </div>
  )
}

export default Registration