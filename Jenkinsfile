pipeline {
  agent {
    node {
      label 'wordic-front-do-138.68.77.165'
    }

  }
  stages {
    stage('environment') {
      steps {
        sh 'hostname'
        sh 'id'
        sh 'whoami'
        sh 'ip addr show ens160'
        sh 'cat /etc/os-release'
        sh 'uname -a'
        sh 'env'
        sh 'pwd'
        sh 'sudo docker -v'
      }
    }

    stage('git clone') {
      steps {
        git(url: 'https://github.com/magikabdul/wordic', branch: 'develop', credentialsId: 'github-magikabdul')
      }
    }

    stage('npm install') {
      steps {
        sh 'pwd'
        sh 'sudo rm -rf ${PWD}/react-frontend/build'
        sh 'sudo docker  run --rm -v ${PWD}/react-frontend:/wordic -w /wordic node:lts-slim npm ci'
      }
    }

  }
}