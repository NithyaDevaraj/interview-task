import React from 'react'
import './referrer.css'

function Referrer() {
    return (
        <div className="table-wrapper">
            <span className="table-heading">Referrer</span>
            <table>
                <tr>
                    <th>LOCATION</th>
                    <th>VIEWS</th>
                    <th>SALES</th>
                    <th>CONVERSION</th>
                    <th>TOTAL</th>
                </tr>
                <tr>
                    <td>google.com</td>
                    <td>3746</td>
                    <td>752</td>
                    <td>43%</td>
                    <td>$19,291</td>
                </tr>
                <tr>
                    <td>facebook.com</td>
                    <td>8126</td>
                    <td>728</td>
                    <td>32%</td>
                    <td>$17,638</td>
                </tr>
                <tr>
                    <td>twitter.com</td>
                    <td>8836</td>
                    <td>694</td>
                    <td>28%</td>
                    <td>$16,218</td>
                </tr>
                <tr>
                    <td>Direct, email, IM</td>
                    <td>1173</td>
                    <td>645</td>
                    <td>24%</td>
                    <td>$14,421</td>
                </tr>
                <tr>
                    <td>linkedin.com</td>
                    <td>2739</td>
                    <td>539</td>
                    <td>20%</td>
                    <td>$12,370</td>
                </tr>
            </table>
            <div className="show-more">Show More</div>
        </div>
    )
}

export default Referrer

