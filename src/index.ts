import axios from 'axios';

const getUserActivity = async (username: string) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/events`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user activity:', error);
  }
};

const displayActivity = (activity: any) => {
    console.log('Actividad: ');
  activity.forEach((event: any) => {
    console.log(`[${event.type}] - ${event.repo.name}`);
  });
};

const main = async () => {
  const username = process.argv[2];
  if (!username) {
    console.error('Por favor, proporciona un nombre de usuario de GitHub.');
    process.exit(1);
  }
  const activity = await getUserActivity(username);
  displayActivity(activity);
};

main();
