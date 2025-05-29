# Gemini Multi-Turn Chat

A Node.js application that enables interactive, context-aware conversations with Google's Gemini AI model. This script maintains conversation history across multiple turns, allowing for more natural and coherent dialogues.

## 🚀 What This Script Does

- **Interactive Chat Interface**: Provides a command-line interface for chatting with Gemini AI
- **Multi-Turn Conversations**: Maintains conversation context across multiple exchanges
- **Customizable Creativity**: Allows users to set the AI's creativity level (temperature)
- **Context Preservation**: Keeps track of conversation history to maintain coherent dialogues
- **Error Handling**: Robust error handling with helpful error messages
- **User-Friendly Interface**: Clean, emoji-enhanced interface for better user experience

## 📋 Features

- **Real-time Chat**: Interactive conversation with Google's Gemini 1.5 Flash model
- **Temperature Control**: Adjust AI creativity from 0.1 (focused) to 1.0 (creative)
- **Conversation Memory**: AI remembers previous messages in the conversation
- **Multiple Turns**: Support for 2-3 turn conversations with option to continue
- **Graceful Exit**: Clean shutdown with proper resource cleanup

## 🛠️ Prerequisites

Before running this application, ensure you have:

1. **Node.js** (version 14 or higher)
2. **npm** (Node Package Manager)
3. **Google AI API Key** (Gemini API access)

## 📦 Installation & Setup

### 1. Clone or Download the Project

```bash
# If using git
git clone <repository-url>
cd gemini-multi-turn-chat

# Or download and extract the files to a folder
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up Environment Variables

Create a `.env` file in the project root directory:

```bash
# Create .env file
touch .env  # On Windows: New-Item .env -ItemType File
```

Add your Gemini API key to the `.env` file:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Get Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Create a new API key
4. Copy the key and paste it in your `.env` file

## 🚀 How to Run

### Method 1: Using npm script

```bash
npm start
```

### Method 2: Direct node execution

```bash
node index.js
```

## 💬 Usage Instructions

1. **Start the Application**: Run the script using one of the methods above
2. **Set Creativity Level**: Enter a value between 0.1-1.0 or press Enter for default (0.7)
   - `0.1-0.3`: More focused and deterministic responses
   - `0.4-0.7`: Balanced creativity and coherence
   - `0.8-1.0`: More creative and varied responses
3. **First Message**: Type your first message and press Enter
4. **Continue Conversation**: The AI will respond, then you can send a second message
5. **Optional Third Turn**: Choose whether to continue for a third exchange
6. **Exit**: The conversation will end automatically, or press Ctrl+C to exit anytime

## 📁 Project Structure

```
gemini-multi-turn-chat/
├── index.js          # Main application file
├── package.json      # Project dependencies and scripts
├── README.md         # This documentation file
└── .env             # Environment variables (create this file)
```

## 📊 Example Conversation

```
🤖 Welcome to Gemini Multi-Turn Chat!
Set creativity level (0.1-1.0, or press Enter for 0.7): 0.7
Using temperature: 0.7

👤 You (1st message): Tell me about quantum computing

🤖 Gemini: Quantum computing is a revolutionary computing paradigm...

👤 You (2nd message): How does it differ from classical computing?

🤖 Gemini: Great follow-up question! The key differences lie in...

Continue for a 3rd turn? (y/n): y

👤 You (3rd message): What are the current limitations?

🤖 Gemini Final Response: Current quantum computing limitations include...
```

## 📝 Dependencies

- **@google/genai**: Official Google Generative AI library
- **dotenv**: Environment variable management
- **readline**: Built-in Node.js module for interactive input
