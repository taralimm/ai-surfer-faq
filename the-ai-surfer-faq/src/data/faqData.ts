export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQSection {
  id: string;
  title: string;
  items: FAQItem[];
}

export const faqData: FAQSection[] = [
  {
    id: "membership",
    title: "Community Membership",
    items: [
      {
        question: "How do I get started?",
        answer: "Head to Skool > Classroom > [Start Here](https://www.skool.com/theaisurfer/classroom/977bc389?md=5ef7c9db4c744285a011976b647f243f) and follow the first lesson to set up your Thought Partner"
      },
      {
        question: "What is the purpose of this community?",
        answer: "The AI Surfer is a human-led, AI-powered education and community built on one mission: Make sure nobody gets left behind in the AI shift.\n\nWe help founders and small business owners use AI in practical, accessible ways—together.\nThis community is designed for:\n* Networking and collaboration\n* Sharing knowledge and ideas\n* Learning how to apply AI in real business scenarios"
      },
      {
        question: "What is 90/10?",
        answer: "We operate on a simple philosophy: **90% AI 10% Human. 100% Doing What You Love.**\n\nWe teach about the lens to look through letting AI handle 90% of tasks that drain you—the repetitive, time-consuming work—so you can focus on the 10% you actually love and enjoy therefore doing 100% of what you love. It's not about replacing humans with AI. It's about freeing humans through AI."
      },
      {
        question: "What’s included in the membership?",
        answer: "You get access to:\n* A supportive community\n* 3–5 live calls per week\n* Convertwave\n* Remixer\n* Training and resources inside the Classroom — [https://www.skool.com/theaisurfer/classroom/977bc389?md=3619d98dd45e4832b4cd0bce1771cf48](https://www.skool.com/theaisurfer/classroom/977bc389?md=3619d98dd45e4832b4cd0bce1771cf48)"
      },
      {
        question: "What kind of Live Calls does the community offer?",
        answer: "We host various Live calls each week. Our calls include:\n* Monday Mastermind with the Founder\n* Networking, weekly\n* Systems & Automations with Convertwave, weekly\n* Workshop - Vibe Coding, monthly\n* Workshop - [MindPal](https://www.skool.com/theaisurfer/classroom/ee883d0a?md=4c614877597f4de4ba32c647627ca0e5), quarterly\n* Women’s Networking, monthly\n* Workshop - Marketing/SEO/Content Creation, weekly\n* Workshop - Sales/Strategy with SalesAi, monthly\n\nYou can find all of our Live Calls in Skool > [Calendar](https://www.skool.com/theaisurfer/calendar)"
      },
      {
        question: "Which AI tools should I subscribe to?",
        answer: "This will vary depending your preferences, budget and goals however the ones that The AI Surfer uses are:\n* ChatGPT\n* Capcut\n* Midjourney\n* ClickUp\n* Kling\n* Claude\n* Google AI Studio / Gemini\n* OpenClaw\n* Gamma (for presentations)\n* Tango (for SOPs)\n* Wispr Flow (voice-to-text dictation)\n* HeyGen"
      },
      {
        question: "What if I can’t attend live calls?",
        answer: "No problem. All sessions are recorded and uploaded to:\n* Classroom → Last 30 Days of Replays (including Specialty Workshop replays)\n* Classroom → Past Replays (older sessions — Monday, Wednesday and Thursday calls)"
      },
      {
        question: "Can I suggest topics or discussions for Wednesday Networking Calls?",
        answer: "Absolutely! We encourage members to suggest topics. Send your ideas to Michelle by emailing support@theaisurfer.com. We’re always open to new and relevant content."
      },
      {
        question: "How do I get support?",
        answer: "* Convertwave issues → use in-app chat (pink “?” icon)\n* Everything else → support@theaisurfer.com"
      },
      {
        question: "How do I get the most out of the community?",
        answer: "Stay active:\n* Join discussions\n* Attend calls\n* Ask questions\n* Help others\n\nThe more you engage, the more value you get."
      },
      {
        question: "Are there any rules or guidelines I should follow?",
        answer: "Yes, we have a few simple guidelines to keep the community productive and respectful:\n* Respect everyone’s opinions and contributions.\n* Keep discussions on-topic and relevant to business and networking in AI\n* Avoid self-promotion unless it's within the designated threads or with prior approval.\n* No spam or unsolicited DMs to other members.\n* Be supportive and constructive in your feedback."
      },
      {
        question: "How can I become more involved in the community?",
        answer: "There are many ways to get more involved! You can volunteer to host an event, lead a discussion, or mentor other members. We also have opportunities for community ambassadors. Reach out to support@theaisurfer.com if you’re interested in taking a more active role."
      },
      {
        question: "What are 'Share and Inspire' sessions, and how can I participate?",
        answer: "‘Share and Inspire’ sessions are dedicated to showcasing innovative uses of AI in business. If you have an AI-driven tool or strategy that’s made a difference in your business, this is your chance to share it with the community.\n\nWe suggest scheduling a 30-minute call to discuss your presentation further and ensure it’s a good fit. Participating in these sessions is a great way to showcase your expertise and inspire others."
      },
      {
        question: "I feel overwhelmed. Do I need to learn everything?",
        answer: "No. Focus on what solves your immediate needs. Learn the rest gradually."
      }
    ]
  },
  {
    id: "convertwave",
    title: "Convertwave",
    items: [
      {
        question: "How do I get paid out for affiliate commission?",
        answer: "To get paid for affiliate commissions:\n\n1. Add your Payout Method.\n2. Commissions earned have to sit in your account for a minimum 30 days from when your referrals started their paid membership before it will payout.\n3. Commissions must be more than $50 before we pay out.\n4. Commissions are paid out on the 1st of the month after a 30-day waiting period, as long as you have at least $50 in commissions earned.\n\nThe reason for the 30-day wait period is that referrals can request for refunds within their first 30 days. And if a refund is issued, commission for that referral cannot be processed."
      },
      {
        question: "I have reached the affiliate earnings threshold and it’s been there for more than 30 days. Why am I not getting the commissions?",
        answer: "We currently process payouts through PayPal, so you’ll need to set that up as your payout method."
      },
      {
        question: "If I cancel my membership, what happens to the referrals that I referred to Convertwave? Do I continue to earn affiliate earnings?",
        answer: "No"
      },
      {
        question: "Can I integrate HubSpot with Convertwave?",
        answer: "It can be integrated through Zapier, and same with any app/tool that can be connected to Zapier."
      },
      {
        question: "How do I upgrade to unlimited AI in Convertwave?",
        answer: "You can upgrade to the unlimited AI by going to Settings > Conversation AI Agents. Select a chatbot, scroll down to the bottom to find the Upgrade to AI Employee option."
      },
      {
        question: "Why don't my affiliate have the same features that I do?",
        answer: "They likely signed up using your Convertwave affiliate link, which won't give them access to the custom-built tools we’ve created for AI Surfers. Direct Convertwave signups are just for your clients.\n\nTo get the full experience (like the AI automation agency setup), your affiliate needs to sign up through your AI Surfer affiliate link."
      },
      {
        question: "How do I fix freezing issues?",
        answer: "1. Hard Refresh the Page\n   * On Mac: Command + Shift + R\n   * On Windows: Ctrl + Shift + R\n2. Clear Cache & Cookies\n   * Sometimes old cache files can cause UI issues. Clear your browser’s cache, then log back in.\n3. Try Incognito Mode\n   * Open the site in a private/incognito window to see if it’s a browser extension causing the issue.\n4. Switch Browsers\n   * GHL runs best on Google Chrome. If you're using another browser, switch to Chrome and try again.\n5. Check for Plugin Conflicts\n   * Disable any browser extensions that might interfere (like ad blockers or privacy tools).\n6. Restart Your Computer\n   * A full reboot can reset background issues that may affect browser performance.\n7. Make sure your internet is fast enough to run Convertwave."
      },
      {
        question: "How is Remixer different from Convertwave?",
        answer: "**Remixer** is a tool that helps you organize your social media content, find and remix viral videos into your own voice, and turn them into content you can reuse and scale.\n\n**Convertwave** is a GoHighLevel white-label platform. It serves as your CRM and allows you to build AI-powered automations, funnels, chatbots, reviews, and more."
      },
      {
        question: "Is there a limit on the number of contacts you can import or have?",
        answer: "No limit."
      },
      {
        question: "Is this an MLM?",
        answer: "No. This is a standard affiliate program, not a multi-level marketing (MLM) model.\n\nWe use a simple 2-tier affiliate structure, meaning you can earn from your direct referrals and one additional level—nothing beyond that."
      },
      {
        question: "How do I import an existing GHL snapshot?",
        answer: "1. Switch to Agency View (click the agency icon in your sidebar).\n2. Go to the Settings tab (bottom-left).\n3. In Settings, select Account Snapshots from the menu\n\n⚙️ **If You Can't Locate It:**\n* You're probably in a sub-account, not Agency level.\n* Only Agency admins have access—you'll need to switch user view to Agency.\n\nSend the link to support@theaisurfer.com and we could push it into your account for you."
      },
      {
        question: "What are the inclusions and are there additional charges?",
        answer: "You can check out our pricing guide here 👉🏻 [https://www.convertwave.ai/pricing](https://www.convertwave.ai/pricing)."
      },
      {
        question: "I didn’t get the login link.",
        answer: "Message us at support@theaisurfer.com and we will send you another email verification link."
      },
      {
        question: "Is there training on Convertwave?",
        answer: "We offer weekly live training sessions to help you get the most out of Convertwave.\n\nInside your Convertwave account, click the pink “?” icon in the top-right corner to access the Quick Start Setup and Marketing Systems 101 training. You can also search for specific features as you explore.\n\nWe also have Convertwave training replays available in the [Skool Classroom](https://www.skool.com/theaisurfer/classroom/17b7536a?md=b50c1d6456ca40faae9d1cff97ea0057) for you to revisit anytime.\n\nFor step-by-step guidance, you can use our [Convertwave GPT](https://chatgpt.com/g/g-KjidmrcA4-convertwave-support)."
      },
      {
        question: "How do I contact customer support?",
        answer: "Training and support live within the “?” icon. From there you can open “Contact Us” to submit an email ticket at any time or chat with a live representative."
      },
      {
        question: "Is there an onboarding call?",
        answer: "Yes. You can schedule your onboarding [HERE](https://www.convertwave.ai/onboarding)"
      },
      {
        question: "How do I manage my subscription or update my payment details?",
        answer: "Go to **Settings** in the left-hand menu, then select Company Billing. From there, you can update your payment method and view your transaction history."
      },
      {
        question: "What if my payment fails?",
        answer: "The system will retry your payment for up to 7 days. If the payment is not completed within that time, your account may be canceled and deleted, along with all data and customizations.\n\nIf this happens, please reach out to support@theaisurfer.com for assistance."
      },
      {
        question: "Can I benefit even if I’m not technical?",
        answer: "Yes. The software is designed for people who aren’t tech‑savvy; everything is broken into simple steps. You can book one‑hour one‑on‑one Convertwave onboarding call through this link: [https://www.convertwave.ai/onboarding](https://www.convertwave.ai/onboarding)."
      },
      {
        question: "Can my team use Convertwave?",
        answer: "Yes. You can add them as staff in Settings > My Staff and set Roles & Permissions."
      },
      {
        question: "How can I create a sub-account?",
        answer: "You can't create sub-accounts but you can onboard yourself just as if you were a client.\n\nPlease refer to [this video](https://www.skool.com/theaisurfer/classroom/a4f749ca?md=37de078ca3054546be06beb24f4588f9)"
      },
      {
        question: "How can I use the Conversation AI trigger in automations?",
        answer: "Conversation AI triggers cannot have any other triggers beside it. This is part of the Agent Studio feature, which can only be activated with an active unlimited AI plan."
      }
    ]
  },
  {
    id: "remixer",
    title: "Remixer",
    items: [
      {
        question: "Where can I access to Remixer?",
        answer: "Access it via the Skool community (right-side panel) or directly: [https://remixer.theaisurfer.com/](https://remixer.theaisurfer.com/)\n\n👉 Use the same email as your membership."
      },
      {
        question: "Why is my Remixer workspace blank or not the same as what Dallas showed in the video?",
        answer: "You’re seeing the default workspace. You can:\n* Rename folders\n* Create new folders\n* Organize projects however you like"
      },
      {
        question: "How do I add a video on Remixer?",
        answer: "You can use the Remixer mobile app to add videos. Download it from:\n* [Google Play](https://play.google.com/store/apps/details?id=org.xyzlabs.remixer&hl=en&pli=1)\n* [App Store](https://apps.apple.com/cd/app/remixer/id6503034230)\n\nTo start a project:\n\n1. Open Instagram\n2. Find a video\n3. Tap Share → select Remixer\n4. Check the web app for the video\n5. Open the newly added video and transcribe\n\n\nYou can also paste an Instagram link directly on the web version.\n\nCheck out [this video](https://t14149631.p.clickup-attachments.com/t14149631/012948d0-3edc-4c6d-ae9b-f7362c39b6a7/How%20to%20use%20Remixer.mp4?open=true) to learn how to remix your videos."
      },
      {
        question: "Do I pay separately?",
        answer: "No. Remixer is included in your membership."
      },
      {
        question: "What is Wax?",
        answer: "Wax = credits used inside Remixer.\nYou get 30,000 per month."
      },
      {
        question: "Can I buy more Wax?",
        answer: "Yes, inside the platform."
      },
      {
        question: "How much Wax is used?",
        answer: "It varies. Check Wax Usage in the sidebar."
      }
    ]
  },
  {
    id: "billing",
    title: "Billing",
    items: [
      {
        question: "How do I change my billing information?",
        answer: "In your Convertwave account, go to Settings > Company Billing and then navigate to the Payments tab on the right. And edit Billing Information.\n\n![Billing Dashboard](/billing-dashboard.png)"
      },
      {
        question: "How do I cancel my membership?",
        answer: "In your Convertwave account, go to Settings > Company Billing. You can also message us at support@theaisurfer.com."
      },
      {
        question: "How do I manage my billing/subscriptions?",
        answer: "In Convertwave, navigate to Settings > Company Billing."
      },
      {
        question: "How do I get a copy of my invoice?",
        answer: "In Convertwave, navigate to Settings > Company Billing > Payments tab. Scroll down to Invoices and Charges."
      },
      {
        question: "Is the NEIL discount only for the first month?",
        answer: "No. The NEIL discount applies to future charges as well. You may see the full amount listed on your invoice, but the actual charge processed will include the discount."
      }
    ]
  }
];
