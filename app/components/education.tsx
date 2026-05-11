
export default function Education({ isDarkMode }: any){
    return(
      <div id="education" className="w-full px-[5%] sm:px-[10%] lg:px-[12%] py-10 scroll-mt-25">
            
            <h2 className="text-center text-5xl font-bold pb-20">Education</h2>  

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
       
        <div className="flex flex-col gap-6">
          <div
            className={`p-6 rounded-xl border shadow-sm flex flex-col gap-4 ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}>
            
            <div className="flex justify-between items-start gap-4">
              <h3 className="text-xl font-bold leading-tight">Bachelor of Science in Software Engineering</h3>
              <span className={`text-sm text-right min-w-[80px] ${ isDarkMode ? "text-gray-400" : "text-slate-500"}`}>2023 -<br />Present</span>
            </div>

            <div className="flex justify-between items-center text-lg">
              <span>University of Kelaniya</span>
            </div>
            
            <p className={`leading-relaxed ${ isDarkMode ? "text-gray-400" : "text-slate-500"}`}>Specializing in Net-Centric Web Application
            Development,Data Science and Engineering Application, Health Informatic Engineering domains.</p>
          </div>

          <div className={`p-6 rounded-xl border shadow-sm flex flex-col gap-4 ${isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}>
           
            <div className="flex justify-between items-center gap-4">
              <h3 className="text-xl font-bold">GCE Advanced Level</h3>
              <span className={`text-sm text-right ${ isDarkMode ? "text-gray-400" : "text-slate-500"}`}>2019 - 2021</span>
            </div>

            <div className="flex justify-between items-center text-lg">
              <span>Royal collage Monaragala</span>
              <span className="font-semibold text-base">Z-Score: 1.57</span>
            </div>

            <p className={`leading-relaxed ${ isDarkMode ? "text-gray-400" : "text-slate-500" }`}>Mathematics, Chemistry, Physics</p>
          </div>

        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold mb-2 border-b-2">Certifications</h2>
        </div>

      </div>
</div>
    )
}