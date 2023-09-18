import Link from "next/link";

export default function StudentInfo(){
    return(
            <div>
            <h1 class="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
            <p>Name: Sourabh Thakur</p>
            <p>Course section: CPRG 306 A</p>
            <Link href="https://github.com/SourabhThakur01/cprg306-assignmnets.git">https://github.com</Link><br/>
            <Link href="./week2">week 2</Link>
            </div>
    )
}