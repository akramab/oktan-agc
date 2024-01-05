const QuestionNav = (props: any) => {
    const data = props?.data;
    return (
        <a href={`#question-${data?.number}`} className={`text-decoration-none border border-dark rounded-3 text-center ${(data.current_answer && !data.flag) && "border-0"} ${data.current_answer && "bg-green-answer"} ${data.flag && "bg-yellow-flag"} question-nav d-flex align-items-center justify-content-center`}>
            <div>
                <p className="">{data?.number}</p>
            </div>
        </a>
    )
}

export default QuestionNav;