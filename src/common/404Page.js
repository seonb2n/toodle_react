import "../css/base.css";

export default function NotFoundPage() {

    return (

        <div className='flex items-center justify-center w-full min-h-[70vh] text-gray-900 my-12 px-4'>
            <div className='flex flex-col items-center w-full gap-8'>
                <h1 className='text-9xl md:text-16xl w-full select-none text-center font-black text-gray-400'>
                    404
                </h1>
                <p className='text-3xl font-semibold text-center'>잘못된 페이지 요청입니다.</p>
                <p className='text-2xl md:px-12 text-center'>
                    로그인 버튼을 눌러서 메인 화면으로 돌아가세요.
                </p>
                <div className='flex flex-row justify-between gap-8'>
                    <a href="/login"
                       className='flex justiy-center items-center px-5 py-2 text-xl rounded-md text-black border border-green-500 hover:bg-green-500 hover:text-white'>
                        로그인
                    </a>
                </div>
            </div>
        </div>
    );
}