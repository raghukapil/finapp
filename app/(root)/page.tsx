import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Raghunath'};
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
            </div>
        </section>
    )
}

export default Home;