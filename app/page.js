import Link from "next/link";
import StudentInfo from "./studentInfo";
    export default function cprg306(){
        return(
                <div class="text-center border border-sky-500">
                <h1 class="text-4xl">CPRG 306: Web Development 2 - Assignments</h1>
                <StudentInfo/>
                <Link href="./week2">week 2</Link>
                </div>
        )
    }