const Review = (props) => (
    <div className="w-[450px] h-auto bg-[#e5e8eb] rounded-xl px-10 py-10 mr-7 inline-block break-all">
      <div className="text-xl font-medium">
        {props.content.map((line, index) => (
            <p key={index}>
            {index === 0 ? `"${line}` : index === props.content.length - 1 ? `${line}"` : line}
            </p>
        ))}
        </div>
      <div className="text-md font-medium text-[#2272eb] mt-5">
        <span className="text-gray-500">정**</span>
        <span className="px-2">·</span>
        가상서버 후기
      </div>
    </div>
  );

export default Review;