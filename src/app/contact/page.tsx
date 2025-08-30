import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <form
        method="POST"
        action="https://formsubmit.co/shubhammishra10101998@gmail.com"
        encType="multipart/form-data"
        className="mx-auto text-accent-foreground"
      >
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email"
            required
            className="px-3 py-2 border border-gray-300 rounded-md outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your name"
            required
            className="p-4 border border-gray-300 rounded-md outline-none"
          />
        </div>

        <div>
          <label
            htmlFor={'message'}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Details of your problem"
            rows={4}
            required
            className="px-3 py-2 border border-gray-300 rounded-md outline-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Send Test
        </button>
      </form>
    </div>
  );
}