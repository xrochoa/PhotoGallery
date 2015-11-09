var plan = require('flightplan');

var appName = 'PhotoGallery';
//created following https://gist.github.com/learncodeacademy/35045e64d2bbe6eb14f9
// and https://gist.github.com/learncodeacademy/3cdb928c9314f98404d0
var username = 'deploy'; 
var startFile = 'server.js';

var tmpDir = appName+'-' + new Date().getTime();

// configuration for staging server and production server
/* we can skip on the staging one
plan.target('staging', [
  {
    host: '104.131.93.214',
    username: username,
    agent: process.env.SSH_AUTH_SOCK
  }
]);*/

//use fly production command to deploy whenever
plan.target('production', [
  {
    host: '162.243.138.122', //this is my droplet from digitalocean
    username: username,
    agent: process.env.SSH_AUTH_SOCK,
    privateKey: '/Users/Xavier/.ssh/id_rsa', //added this since it couldnt initially authenticate
    failsafe: true //
  },
//add in another server if you have more than one
// {
//   host: '104.131.93.216',
//   username: username,
//   agent: process.env.SSH_AUTH_SOCK
// }
]);

// run commands on localhost
plan.local(function(local) {
  // uncomment these if you need to run a build on your machine first
  // local.log('Run build');
  // local.exec('gulp build');

  local.log('Copy files to remote hosts');
  var filesToCopy = local.exec('git ls-files', {silent: true});
  // rsync files to all the destination's hosts
  local.transfer(filesToCopy, '/tmp/' + tmpDir);
});

// run commands on remote hosts (destinations)
plan.remote(function(remote) {
  remote.log('Move folder to root');
  remote.sudo('cp -R /tmp/' + tmpDir + ' ~', {user: username});
  remote.rm('-rf /tmp/' + tmpDir);

  remote.log('Install dependencies');
  remote.sudo('npm --production --prefix ~/' + tmpDir + ' install ~/' + tmpDir, {user: username});

  remote.log('Reload application');
  remote.sudo('ln -snf ~/' + tmpDir + ' ~/'+appName, {user: username});
  remote.exec('forever stop ~/'+appName+'/'+startFile, {failsafe: true});
  remote.exec('forever start ~/'+appName+'/'+startFile);
});