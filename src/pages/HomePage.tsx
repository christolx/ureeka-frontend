import {useEffect} from 'react';
import {useSearchParams} from 'react-router-dom';
import {useAuth} from '@/contexts/AuthContext';
import Hero from "@/components/Hero.tsx";
import About from "@/components/About.tsx";
import Donations from "@/components/Donations.tsx";
import Articles from "@/components/Articles.tsx";
import Contacts from "@/components/Contacts.tsx";

const HomePage = () => {
    const [searchParams] = useSearchParams();
    const {userInfo, isAuthenticated} = useAuth();

    const apiUrl = import.meta.env.VITE_API_URL;

    useEffect(() => {
        const orderId = searchParams.get('order_id');
        const statusCode = searchParams.get('status_code');
        const transactionStatus = searchParams.get('transaction_status');

        if (orderId && statusCode && transactionStatus && isAuthenticated && userInfo) {
            recordPayment(orderId, statusCode, transactionStatus, userInfo.email);
        } else if (orderId && statusCode && transactionStatus) {
            console.log('Payment redirect received but user is not authenticated. Please log in to record payment.');
        }
    }, [searchParams, apiUrl, isAuthenticated, userInfo]);

    const recordPayment = async (orderId: string, statusCode: string, transactionStatus: string, userEmail: string) => {
        try {
            const response = await fetch(`${apiUrl}/donations/record-payment`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    OrderId: orderId,
                    StatusCode: statusCode,
                    TransactionStatus: transactionStatus,
                    UserEmail: userEmail
                }),
            });

            if (!response.ok) {
                throw new Error(`Server responded with status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Payment recorded:', data);

            if (data.success) {
                console.log('Payment successfully recorded');
            } else {
                console.error('Failed to record payment:', data.message);
            }
        } catch (error) {
            console.error('Error recording payment:', error);
        }
    };

    return (
        <div className="p-4">
            <section id="home">
                <Hero/>
            </section>

            <section id="about">
                <About/>
            </section>

            <section id="donations">
                <Donations/>
            </section>

            <section id="articles">
                <Articles/>
            </section>

            <section id="contacts">
                <Contacts/>
            </section>
        </div>
    );
};

export default HomePage;