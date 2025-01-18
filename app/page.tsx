import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, Globe, Wrench, BarChart } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">AutoChat AI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Your Multilingual Automotive Assistant
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Always Here to Help – In Any Language, For Any Car
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-blue-600 hover:bg-blue-700">Start Chatting</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Experience AutoChat AI</h2>
            <div className="flex justify-center">
              <Card className="w-full max-w-2xl p-6 bg-gray-100 rounded-lg shadow-lg">
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-blue-500 text-white rounded-lg p-3 max-w-[70%]">
                      How can I help you with your car today?
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-gray-300 rounded-lg p-3 max-w-[70%]">
                      I need help diagnosing a strange noise from my engine.
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-blue-500 text-white rounded-lg p-3 max-w-[70%]">
                      I understand. Can you describe the noise? Is it a knocking, whining, or rattling sound?
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Type your message here..."
                    className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <Globe className="w-12 h-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Multilingual Support</h3>
                <p className="text-gray-500">Communicate in over 50 languages for global assistance.</p>
              </Card>
              <Card className="p-6">
                <Wrench className="w-12 h-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">Integrated Diagnostics</h3>
                <p className="text-gray-500">Seamlessly connects with automotive service systems.</p>
              </Card>
              <Card className="p-6">
                <MessageCircle className="w-12 h-12 mb-4 text-blue-500" />
                <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
                <p className="text-gray-500">Get help anytime, anywhere with our always-on chatbot.</p>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Trusted by Thousands</h2>
            <div className="flex justify-center items-center space-x-4">
              <BarChart className="w-12 h-12 text-blue-500" />
              <p className="text-2xl font-bold">Helping 5000+ users daily</p>
            </div>
            <div className="mt-12 text-center">
              <Button className="bg-blue-600 hover:bg-blue-700">Try Now</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 AutoChat AI. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

