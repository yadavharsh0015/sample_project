<?php


// app/Http/Controllers/YogaAdmissionController.php

namespace App\Http\Controllers;

use App\Models\YogaEnrollment; // Add the model at the top

use Illuminate\Http\Request; 
class YogaAdmissionController extends Controller
{
    public function enroll(Request $request)
    {
        // Basic validation

        

        $validatedData = $request->validate([
            'name' => 'required|string',
            'age' => 'required|integer|between:18,65',
            'batch' => 'required|string',
        ]);

        // Store the data in the database
        $enrollment = new YogaEnrollment();
        $enrollment->name = $validatedData['name'];
        $enrollment->age = $validatedData['age'];
        $enrollment->batch = $validatedData['batch'];
        $enrollment->save();

        // Assume that CompletePayment() is a mock function which does the payment
        $paymentResponse = $this->completePayment();
        

        return response()->json(['message' => 'Enrollment successful', 'paymentStatus' => $paymentResponse]);
    }

    private function completePayment()
    {
        // Mock function for payment (to be implemented)
        // Assume a successful payment
        return 'success';
    }
}

