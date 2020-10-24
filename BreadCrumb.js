const breadcrumbNameMap = {
    '/apps': 'Application List',
    '/apps/1': 'Application1',
    '/apps/2': 'Application2',
    '/apps/1/detail': 'Detail',
    '/apps/2/detail': 'Detail',
  };

  const result = '/location/city/seoul/';

  
  const result1 =result.split('/');
  // [ '', 'location', 'city', 'seoul', '' ] 
  const result2= result.split('/').filter(i=>i).join('');
  // [location,city,seoul]
console.log(result2)