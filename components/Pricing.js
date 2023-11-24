import React, { useState, useEffect } from 'react';
// import { supabase } from '../utils/auth';
import Link from 'next/link';

const Pricing = () => {
    const [user, setUser] = useState(null);

    // useEffect(() => {
    //     const fetchUser = async () => {
    //         const { data, error } = await supabase.auth.getUser();
    //         if (data) {
    //             setUser(data);
    //             console.log(data);
    //         } else {
    //             console.error('Error fetching user:', error);
    //         }
    //     };
    //     fetchUser();
    // }, []);

    const [active, setActive] = useState('monthly');

    // Function to handle button clicks
    const handleToggle = (plan) => {
      setActive(plan);
    };

    return (
      <div className='pricing-container'>
      <h3 className='pricing-header'><span className='gradient-text'>Premium quality</span> without the premium price</h3>
      <p className='pricing-subheader'>Revamp your LinkedIn, boost your job application, or upgrade your company&apos;s site with our tailored headshot plans.</p>
        <div className='pricing-grid-toggle-container'>
            <button
                className={`pricing-grid-toggle-btn ${active === 'monthly' ? 'toggle-active' : ''}`}
                onClick={() => handleToggle('monthly')}
            >
                Individual
            </button>
            <button
                className={`pricing-grid-toggle-btn ${active === 'yearly' ? 'toggle-active' : ''}`}
                onClick={() => handleToggle('yearly')}
            >
                Team
            </button>
            </div>

            <div className='div-content'>
                {active === 'monthly' ? (
                <div className='pricing-grid'>
                    <div className='pricing-grid-item'>
                        <h3 className='pricing-grid-header'>$0.99</h3>
                        <p className='pricing-grid-p'>Get a feel for how it works. Single headshot, single payment.</p>
                        <hr className='pricing-grid-hr'></hr>
                        <h2 className='pricing-grid-plan blue-pricing-header'>Starter</h2>
                        {user?.user ? ( <Link href='/test'><button className='pricing-grid-btn btn-tertiary' type='button'>Get Started</button></Link>):(<Link href='/register'><button className='btn-tertiary pricing-grid-btn' type='button'>Get Started</button></Link>)}
                    </div>
                    <div className='pricing-grid-item'>
                        <h3 className='pricing-grid-header'>$19.99</h3>
                        <p className='pricing-grid-p'>Access to all features with 100 AI Credits & free monthly review.</p>
                        <hr className='pricing-grid-hr'></hr>
                        <h2 className='pricing-grid-plan'>Pro</h2>
                        {user?.user ? ( <Link href='https://buy.stripe.com/test_5kAfZWfRO11B8c89AA'><button className='btn-primary pricing-grid-btn' type='button'>Get Started</button></Link>):(<Link href='/register'><button className='btn-primary pricing-grid-btn' type='button'>Get Started</button></Link>)}
                    </div>
                    <div className='pricing-grid-item'>
                        <h3 className='pricing-grid-header'>$39.99</h3>
                        <p className='pricing-grid-p'>Access to all features with <i>unlimited</i> AI Credits.</p>
                        <hr className='pricing-grid-hr'></hr>
                        <h2 className='pricing-grid-plan platinum-header'>Premium</h2>
                        {user?.user ? ( <Link href='/payment'><button className='btn-tertiary pricing-grid-btn' type='button'>Get Started</button></Link>):(<Link href='/register'><button className='btn-tertiary pricing-grid-btn' type='button'>Get Started</button></Link>)}
                    </div>
            </div>
        ) : (
            <div className='pricing-grid'>
                    <div className='pricing-grid-item'>
                        <h3 className='pricing-grid-header'>$0.99</h3>
                        <p className='pricing-grid-p'>Get a feel for how it works. Single headshot, single payment.</p>
                        <hr className='pricing-grid-hr'></hr>
                        <h2 className='pricing-grid-plan blue-pricing-header'>Starter</h2>
                        {user?.user ? ( <Link href='/test'><button className='pricing-grid-btn btn-tertiary' type='button'>Get Started</button></Link>):(<Link href='/register'><button className='btn-tertiary pricing-grid-btn' type='button'>Get Started</button></Link>)}
                    </div>
                    <div className='pricing-grid-item'>
                        <h3 className='pricing-grid-header'>$19.99</h3>
                        <p className='pricing-grid-p'>Access to all features with 100 AI Credits & free monthly review.</p>
                        <hr className='pricing-grid-hr'></hr>
                        <h2 className='pricing-grid-plan'>Pro</h2>
                        {user?.user ? ( <Link href='https://buy.stripe.com/test_5kAfZWfRO11B8c89AA'><button className='btn-primary pricing-grid-btn' type='button'>Get Started</button></Link>):(<Link href='/register'><button className='btn-primary pricing-grid-btn' type='button'>Get Started</button></Link>)}
                    </div>
                    <div className='pricing-grid-item'>
                        <h3 className='pricing-grid-header'>$39.99</h3>
                        <p className='pricing-grid-p'>Access to all features with <i>unlimited</i> AI Credits.</p>
                        <hr className='pricing-grid-hr'></hr>
                        <h2 className='pricing-grid-plan platinum-header'>Premium</h2>
                        {user?.user ? ( <Link href='/payment'><button className='btn-tertiary pricing-grid-btn' type='button'>Get Started</button></Link>):(<Link href='/register'><button className='btn-tertiary pricing-grid-btn' type='button'>Get Started</button></Link>)}
                    </div>
        </div>
        )
        }
      </div>     
    </div>
    );
};

export default Pricing;
