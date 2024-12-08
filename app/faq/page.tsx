

const FAQ = () => {
    const questions = [
        { question: "What types of chairs do you offer?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat." },
        { question: "Do your chairs come with a warranty?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat." },
        { question: "Can I try a chair before purchasing?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat." },
        { question: "How can we get in touch with you?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat." },
        { question: "What will be delivered? And when?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat." },
        { question: "How do I clean and maintain my Comforty chair?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat." },
    ];

    return (
        <div className="bg-gray-100">
            {/* Main FAQ Content */}
            <h1 className="text-3xl font-bold text-center mb-6 p-6">Questions Looks Here</h1>
            <p className="text-center text-gray-600 mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="grid gap-6 md:grid-cols-2 px-20 ">
                {questions.map((q, idx) => (
                    <div key={idx} className="p-4 bg-white rounded shadow">
                        <h3 className="font-semibold text-lg">{q.question}</h3>
                        <p className="text-gray-600 mt-2">{q.answer}</p>
                    </div>
                ))}
            </div>

            <br />
            <br />
            <br />

            {/* Footer Section */}
            
        </div>
    );
};

export default FAQ;
