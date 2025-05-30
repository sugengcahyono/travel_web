<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DestinationResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name_destination,
            'location' => $this->location_destination,
            'description' => $this->description_destination,
            'image_url' => $this->image_destination,
            'price_start' => $this->price_destination,
            'rating' => 4.8, // atau pakai kolom rating jika ada
        ];
    }
}
