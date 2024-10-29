pipeline {
    agent any
    environment {
        NODE_ENV = 'development'
    }
    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    // Ensure Node.js and npm are installed
                    sh 'node -v'
                    sh 'npm -v'
                    // Install project dependencies
                    sh 'npm install'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    // Run your tests
                    sh 'npm test'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    // If there's a build step, add it here (e.g., npm run build)
                    sh 'npm run build'
                }
            }
        }
    }
    post {
        success {
            echo 'Build and tests succeeded!'
        }
        failure {
            echo 'Build or tests failed.'
        }
    }
}