<template>
  
  
    <v-row align="center">
      
      <v-col cols="12" sm="6">
        <div class="text-center">
          
          
          </div>

        <v-card-actions>

         <template v-slot:activator="{ on, attrs }">

            <v-btn color="primary"  dark
             v-bind="attrs"
             v-on="on"
        
             >
            <v-icon>mdi-alarm</v-icon>
              
            </v-btn>
          </template>
        
      <v-card>
          <v-card-title class="headline blue">
          Facebook
        </v-card-title>

        <v-card-text>
         <v-text-field>
           
            required
         </v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          
         <!-- I accept button -->
          <v-spacer>
          <v-btn 
            color="primary"
            width="20 px"
            text
            @click="dialog = false"
          >
          <!-- i accept button end -->
                
            <!-- if the value is changed to true then 
            clicking on i accept wont have any chnages in this form -->

            I accept
          </v-btn>
          </v-spacer>
        </v-card-actions>
      </v-card>
            
         
        </v-card-actions>  
      </v-col>
    </v-row>
 
</template>








