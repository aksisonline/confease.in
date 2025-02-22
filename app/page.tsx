"use client"

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SocialLinks from "@/components/social-links";
import Script from "next/script";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

// Initialize Supabase client
const supabase = createClient();

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit email');
      }

      const result = await response.json();
      if (result.success) {
        const { error } = await supabase
          .from("email_subscriptions")
          .insert([{ email }]);

        if (error) {
          throw error;
        }
        
        setIsSent(true);
        setEmail('');
      } else {
        throw new Error(result.error);
      }

    } catch (error) {
      console.error('Error submitting email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-black">
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />

      <header className="p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tighter">
          Confease
        </h1>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4 md:px-8 gap-16 py-8">
        <div className="max-w-2xl w-full space-y-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Unburden Your Mind
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-md mx-auto">
            A safe space for GenZ to confess, heal, and grow. Coming soon to
            your screens and hearts.
          </p>
          {isSent ? (
            <div className="flex flex-col items-center space-y-4">
              <p className="text-xl font-semibold text-black">Thank you for subscribing!</p>
              <p className="text-gray-600">We&apos;ll keep you updated on our launch.</p>
            </div>
          ) : (
            <form
              className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
              onSubmit={handleSubmit}
            >
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
              <Button
                type="submit"
                className="bg-black text-white hover:bg-gray-800"
                disabled={isLoading}
              >
                {isLoading ? 'Sending...' : 'Notify Me'}
              </Button>
            </form>
          )}
        </div>

        <div className="w-full max-w-[540px] flex justify-center">
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/reel/DGD0kbdTCLK/?utm_source=ig_embed&utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: "0",
              borderRadius: "3px",
              boxShadow:
                "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: "1px",
              maxWidth: "540px",
              minWidth: "326px",
              padding: "0",
              width: "calc(100% - 2px)",
            }}
          />
        </div>
      </main>

      <footer className="p-6 md:p-8">
        <div className="flex justify-center items-center space-x-4">
          <SocialLinks />
        </div>
        <p className="mt-4 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Confease. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
