Once running, any saved changes to files within the directory will trigger an automatic restart of `app.js`.

---

## ⚙️ How It Works

This tool leverages several high-performance libraries to ensure stability:

*   **[Chokidar](https://github.com/paulmillr/chokidar)**: Handles efficient file system watching.
*   **[Lodash.debounce](https://lodash.com/docs/4.17.15#debounce)**: Ensures the restart logic only fires once after the user finishes saving files.
*   **[Caporal](https://github.com/mattallty/Caporal.js)**: Powers the CLI command-line argument and helper logic.
*   **`child_process.spawn`**: Manages the lifecycle of the running script.

---

## 🛠️ Global Command Configuration

To ensure the CLI works correctly after running `npm link`, verify the following in your local files:

1.  **`package.json`** must contain the `bin` field:
    ```json
    "bin": {
      "watchit": "./index.js"
    }
    ```

2.  **`index.js`** (the entry point) must start with the following shebang:
    ```javascript
    #!/usr/bin/env node
    ```

---

## 📦 Dependencies

*   `chokidar` - File watching
*   `lodash.debounce` - Performance optimization
*   `caporal` - CLI framework
*   `chalk` - Terminal stylingHere is a polished, professional **README.md** file for your project. I’ve structured it to be "copy-paste ready" with clear formatting and scannability.

---

# README.md

# 🛠️ CLI Directory Watcher

A lightweight, efficient Node.js Command Line Interface (CLI) tool designed to monitor file changes in your directory and automatically restart your Node process. Perfect for streamlining development workflows without the bloat of larger packages.

---

## 🚀 Features

*   **Real-time Monitoring**: Watches files in the current directory for any modifications.
*   **Auto-Restart**: Instantly kills and restarts the active process when a change is detected.
*   **Debounced Execution**: Prevents "flickering" or multiple rapid restarts during bulk saves.
*   **Global Access**: Easily link the tool to use the `watchit` command anywhere on your system.
*   **Clean UI**: Uses colored terminal output for better readability.

---

## 📥 Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/ameeradil/CLI-directory-watcher.git](https://github.com/ameeradil/CLI-directory-watcher.git)
    cd CLI-directory-watcher
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Link globally (Optional but Recommended):**
    To use the `watchit` command from any folder on your machine:
    ```bash
    npm link
    ```

---

## 🛠️ Usage

Simply run the watcher followed by the filename you want to execute:
```bash
watchit <filename>
