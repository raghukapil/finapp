import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Raghunath', lastName: 'Dagudu', email: 'raghunath.kapil@gmail.com' };
    return (
        <section className='home'>
            <div className='home-content'>
                <header className='home-header'>
                    <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn.firstName || 'Gust'}
                    subtext="Access and mange your all the bank transactions at one place"/>

                    <TotalBalanceBox 
                    accounts={[]}
                    totalBanks = {1}
                    totalCurrentBalance  = {5000.00}/>
                </header>
                RECENT TRANSACTIONS
            </div>
            <RightSidebar
                user={loggedIn}
                banks={[{currentBalance:3000}, {currentBalance: 2000}]}
                transactions={[]} 
            />
        </section>
    )
}

export default Home;