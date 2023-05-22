app.controller('myController', function($scope) {
    $scope.availableTimes = ['10:00', '11:00', '12:00', '13:00', '14:00'];
    
    // reszta kodu kontrolera...
});

app.controller('myController', function($scope) {
    $scope.availableTimes = ['10:00', '11:00', '12:00', '13:00', '14:00'];
    
    $scope.$watch('appointmentDate', function(newDate, oldDate) {
        if (newDate !== oldDate) {
            // Tutaj można dostosować dostępne godziny w zależności od wybranej daty
        }
    });
    
    // reszta kodu kontrolera...
});

$scope.$watch('appointmentDate', function(newDate, oldDate) {
    if (newDate !== oldDate) {
        if (newDate.getDay() === 1) { // Poniedziałek (getDay() zwraca wartość od 0 do 6, gdzie 0 to niedziela)
            $scope.availableTimes = ['10:00', '11:00', '12:00', '13:00', '14:00'];
        } else {
            $scope.availableTimes = []; // Inne dni będą miały pustą listę godzin
        }
    }
});
