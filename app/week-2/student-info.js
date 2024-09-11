import Link from "next/link";


export default function StudentInfo(){
    return(
        <div>
            <ul>
                <li>
                Daetan Noskey
                </li>
                <li>
                    <Link href = "https://github.com/NDaetan/cprg306-assignments.git">This is the link to my Github</Link>
                </li>
            </ul>
        </div>
    );
}