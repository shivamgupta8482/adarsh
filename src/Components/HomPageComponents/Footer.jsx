import { TabList,Thead,Tr,Th,Tbody,TableContainer, Table, Td,TableCaption,Tfoot } from "@chakra-ui/react"
import styles from "./Footer.module.css"
import { FaFacebookSquare } from 'react-icons/fa';
import { FiTwitter } from "react-icons/fi";
import {AiOutlineInstagram} from "react-icons/ai"
import { FaPinterest } from "react-icons/fa";
import {BsLinkedin} from "react-icons/bs"

export default function Footer(){
    return(
       <div>
        <section className={styles.footer}>
        <div class="links">
            <img className={styles.footerimg} src="https://assets.loseit.com/website/home/Footer_WhiteKnockOutLogo.svg" alt="Lose It! logo" />
            <table id="footerTableDesktop">
                <tr>
                    <th>Member Resources</th>
                    <th>Connect With Us</th>
                    <th>Our Team</th>
                </tr>
                <tr>
                    <td><a href="/how-it-works/">How It Works</a></td>
                    <td><a href="/press/">Press & Media Kit</a></td>
                    <td><a href="/about/">About Us</a></td>
                </tr>
                <tr>
                    <td><a href="/how-it-works/#premium">Premium</a></td>
                    <td><a href="https://help.loseit.com/hc/en-us/requests/new">Contact Us</a></td>
                    <td><a href="/jobs/">Careers</a></td>
                </tr>
                <tr>
                    <td><a href="https://loseitblog.com">Lose It! Blog</a></td>
                    <td><a href="/partners/">Partners & API</a></td>
                    <td><a href="/diversity/">Diversity</a></td>
                </tr>
                <tr>
                    <td><a href="https://help.loseit.com/hc/en-us">Help Center</a></td>
                    <td><a href="/memberstories/">Share Your Story</a></td>
                    <td></td>
                </tr>
            </table>
            {/* <table id="footerTableMobile">
                <tr>
                    <td><a href="/how-it-works/">How It Works</a></td>
                </tr>
                <tr>
                    <td><a href="/how-it-works/#premium">Premium</a></td>
                </tr>
                <tr>
                    <td><a href="https://help.loseit.com/hc/en-us">Help Center</a></td>
                </tr>
                <tr>
                    <td><a href="https://loseitblog.com">Lose It! Blog</a></td>
                </tr>
                <tr>
                    <td><a href="/jobs/">Careers</a></td>
                </tr>
                <tr>
                    <td><a href="/about/">About Us</a></td>
                </tr>
                <tr>
                    <td><a href="https://help.loseit.com/hc/en-us/requests/new">Contact Us</a></td>
                </tr>
            </table> */}
            <br />
            <br />
        </div>
        <div className={styles.footersocial}>
  
      <div  style={{display:"flex",gap:"20px",alignContent:"center",justifyContent:"center"}}>
       <FaFacebookSquare size="1.5em" />
        <AiOutlineInstagram  size="1.5em"/>
        <FiTwitter size="1.5em"/>
        <FaPinterest size="1.5em"/>
        <BsLinkedin size="1.5em"/>
       </div>
      <br />
          
            <p>Copyright 2008-2021 FitNow, Inc, All Rights Reserved
                <br />
                <a href="/privacy">Privacy</a> |
                <a href="/terms">Terms of Service</a>
            </p>
        </div>
    </section>
       </div>
    )
}