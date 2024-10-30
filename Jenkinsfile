pipeline {
    agent any
    environment {
        NODE_VERSION = '14' // or a higher version like '16' if required
    }
    stages {
        stage('Install Node.js') {
            steps {
                sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash'
                sh '. ~/.nvm/nvm.sh && nvm install $NODE_VERSION'  // Install Node.js 14 if not already installed
                sh '. ~/.nvm/nvm.sh && nvm use $NODE_VERSION'     // Use Node.js 14 for subsequent steps
                sh '. ~/.nvm/nvm.sh && node -v && npm -v'         // Verify Node and npm versions
            }
        }
        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh '. ~/.nvm/nvm.sh && nvm use $NODE_VERSION && npm install'
            }
        }
        stage('Run Tests') {
            steps {
                echo 'Running tests...'
                sh '. ~/.nvm/nvm.sh && nvm use $NODE_VERSION && npm test'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh '. ~/.nvm/nvm.sh && nvm use $NODE_VERSION && npm run build'
            }
        }
    }
}
