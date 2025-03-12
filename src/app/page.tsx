import Image from 'next/image'
import Link from 'next/link'
import { Play } from 'lucide-react'
import { Button } from '@/components/ui/button'
import CookieConsent from '@/components/cookie-consent'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation */}
      <nav className="bg-[#3d2e17] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/logo.svg" 
              alt="CodeRobot Logo" 
              width={150} 
              height={50} 
              className="mr-4"
            />
          </div>
          <div className="hidden md:flex space-x-4 flex-1 justify-center">
            <div className="relative group">
              <button className="px-4 py-2 flex items-center">
                COURSES <span className="ml-1">▼</span>
              </button>
            </div>
            <div className="relative group">
              <button className="px-4 py-2 flex items-center">
                PLANS <span className="ml-1">▼</span>
              </button>
            </div>
            <div className="relative group">
              <button className="px-4 py-2 flex items-center">
                RESOURCES <span className="ml-1">▼</span>
              </button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Link href="/kids-signup">
              <Button className="bg-[#d4a76a] hover:bg-[#c09255] text-white">
                KIDS SIGN UP
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-[#d4a76a] hover:bg-[#c09255] text-white">
                SIGN UP
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" className="text-white hover:text-[#d4a76a]">
                LOG IN
              </Button>
            </Link>
            <div className="flex items-center ml-2">
              <span className="mr-1">🇺🇸</span>
              <span>EN</span>
              <span className="ml-1">▼</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#8bc34a] relative overflow-hidden">
        <div className="container mx-auto text-center py-16 px-4 relative z-10">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 font-['Handlee']">
            CODING FOR KIDS
          </h1>
          <p className="text-xl text-white mb-8 max-w-3xl mx-auto">
            INTRODUCING PROGRAMMING GAMES FOR THE NEXT GENERATION
          </p>
          <Button className="bg-[#ffd54f] hover:bg-[#ffca28] text-[#5d4037] text-xl px-8 py-6 rounded-full font-bold">
            START FOR FREE
          </Button>
          <div className="mt-8 flex justify-center">
            <Image 
              src="/robot.svg" 
              alt="Robot Character" 
              width={200} 
              height={200} 
              className="animate-bounce"
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L1440,224L1440,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Write Code Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold text-[#ffc107] mb-16 font-['Handlee']">
            Write code.
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center px-4">
            <div className="text-left">
              <p className="mb-6 text-gray-700">
                CodeRobot is an AWARD-WINNING online platform that teaches kids real 
                coding languages like JavaScript and Python. Children and teenagers 
                learn block-based and text-based coding through an engaging game-like
                environment.
              </p>
              <p className="mb-6 text-gray-700">
                Millions of CodeRobot's students are now excited about coding!
                CodeRobot does not require prior coding experience to teach and is
                designed for schools, clubs, and home use.
              </p>
              <p className="mb-6 text-gray-700">
                <strong>Do you want to start coding now?</strong> Kids from 5-14 years old can learn block-
                coding, text-coding, JavaScript and Python all while playing! Kids as
                young as 5 can start programming to solve scaffolded puzzles and build
                their own games. Try it today!
              </p>
              <Button className="bg-[#8bc34a] hover:bg-[#7cb342] text-white mt-4">
                GET STARTED
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <div className="relative pb-[56.25%]">
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/80 flex items-center justify-center cursor-pointer">
                      <Play className="h-10 w-10 text-[#8bc34a]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#8bc34a] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Learn Real Coding</h3>
              <p className="text-gray-600">Master JavaScript and Python through fun, interactive games and challenges.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#8bc34a] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Build Games</h3>
              <p className="text-gray-600">Create your own games and applications while learning fundamental programming concepts.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#8bc34a] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">For All Ages</h3>
              <p className="text-gray-600">Designed for kids ages 5-14, with different difficulty levels to match every skill level.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#ffc107] font-['Handlee']">What Kids Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="italic mb-4">"I love CodeRobot! It makes learning to code so much fun. I've already built three games!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#8bc34a] rounded-full mr-3"></div>
                <div>
                  <p className="font-bold">Emma, 10</p>
                  <p className="text-sm text-gray-600">Student</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="italic mb-4">"The robot character is so cool! I look forward to my coding lessons every day."</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#8bc34a] rounded-full mr-3"></div>
                <div>
                  <p className="font-bold">Jacob, 8</p>
                  <p className="text-sm text-gray-600">Student</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="italic mb-4">"I started with blocks and now I'm writing real Python code. CodeRobot made it easy!"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-[#8bc34a] rounded-full mr-3"></div>
                <div>
                  <p className="font-bold">Sophia, 12</p>
                  <p className="text-sm text-gray-600">Student</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#8bc34a]">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-6 font-['Handlee']">Ready to Start Coding?</h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join millions of kids who are learning to code with CodeRobot today!
          </p>
          <Button className="bg-[#ffd54f] hover:bg-[#ffca28] text-[#5d4037] text-xl px-8 py-6 rounded-full font-bold">
            START FOR FREE
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3d2e17] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CodeRobot</h3>
              <p className="mb-4">Teaching kids to code through fun and engaging games.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[#ffc107]">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#ffc107]">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-[#ffc107]">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#ffc107]">Blog</a></li>
                <li><a href="#" className="hover:text-[#ffc107]">Tutorials</a></li>
                <li><a href="#" className="hover:text-[#ffc107]">Documentation</a></li>
                <li><a href="#" className="hover:text-[#ffc107]">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#ffc107]">About Us</a></li>
                <li><a href="#" className="hover:text-[#ffc107]">Careers</a></li>
                <li><a href="#" className="hover:text-[#ffc107]">Press</a></li>
                <li><a href="#" className="hover:text-[#ffc107]">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#ffc107]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#ffc107]">Terms of Service</a></li>
                <li><a href="#" className="hover:text-[#ffc107]">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} CodeRobot. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Cookie Consent */}
      <CookieConsent />
    </main>
  )
}