import styles from './transactions.module.css'
import Image from 'next/image'

const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.Heading}>Latest Transactions</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/user.jfif"  alt="user" width={40} height={40} className={styles.userImage} />
                            John Doe </div>
                        </td>

                        <td><span className={`${styles.status} ${styles.pending}`}>Pending</span></td>
                        <td>14.02.2024</td>
                        <td>UGX 32.00</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/user.jfif"  alt="user" width={40} height={40} className={styles.userImage} />
                            John Doe </div>
                        </td>

                        <td><span className={`${styles.status} ${styles.done}`}>Done</span></td>
                        <td>14.02.2024</td>
                        <td>UGX 32.00</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/user.jfif"  alt="user" width={40} height={40} className={styles.userImage} />
                            John Doe </div>
                        </td>

                        <td><span className={`${styles.status} ${styles.cancelled}`}>cancelled</span></td>
                        <td>14.02.2024</td>
                        <td>UGX 32.00</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/user.jfif"  alt="user" width={40} height={40} className={styles.userImage} />
                            John Doe </div>
                        </td>

                        <td><span className={`${styles.status} ${styles.pending}`}>Pending</span></td>
                        <td>14.02.2024</td>
                        <td>UGX 32.00</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/user.jfif"  alt="user" width={40} height={40} className={styles.userImage} />
                            John Doe </div>
                        </td>

                        <td><span className={`${styles.status} ${styles.pending}`}>Pending</span></td>
                        <td>14.02.2024</td>
                        <td>UGX 32.00</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/user.jfif"  alt="user" width={40} height={40} className={styles.userImage} />
                            John Doe </div>
                        </td>

                        <td><span className={`${styles.status} ${styles.pending}`}>Pending</span></td>
                        <td>14.02.2024</td>
                        <td>UGX 32.00</td>
                    </tr>


                </tbody>

            </table>
        </div>
    )
}

export default Transactions