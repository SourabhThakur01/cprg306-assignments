import Link from "next/link";
import StudentInfo from "./studentInfo";
    export default function cprg306(){
        return(
                <div class="px-10 mx-10 my-20 text-xl">
                <h1 class="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
                <StudentInfo/>
                <Link href="./week2">week 2</Link><br/>
                <Link href="./week3">week 3</Link>
                </div>
        );
    }