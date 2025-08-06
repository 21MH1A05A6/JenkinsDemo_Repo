pipeline{
    agent any
    stages{
        stage('Checkout'){
            steps{
                git branch:'https://github.com/21MH1A05A6/JenkinsDemo_Repo.git'
            }
        }

        stage('Build'){
            steps{
                echo 'Building the project...'
            }
        }

        stage('Test'){
            steps{
                echo 'Running tests...'
            }
        }
        stage('Deploy'){
            steps{
                echo 'Deploying the project...'
            }
        }
    }
}
