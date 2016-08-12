<?php 
        if( isset($_POST["code"]))
        {
            $block_string = $_POST ["code"];
            $block_array = explode(",", $block_string);
            
            if(strlen($block_string)>0){
            
                $content = "";
                $css = "";
                $folder = $_POST ["timest"];
                
                mkdir("projects/".$folder, 0777);
                mkdir('projects/'.$folder.'/css', 0777);
                
                foreach ($block_array as $value) {
                    $content .= file_get_contents('build/html/'.$value)."\n";
                }
                
                // Планы на будущее
                
                /*$unique = array_unique($block_array);
                
                foreach ($unique as $value) {
                    $css .= file_get_contents('build/css/'.$value)."\n";
                }
                
                file_put_contents('projects/'.$folder.'/css/webgeeks.css',$css);*/
                
                $html .= file_get_contents('build/include/header')."\n";
                $html .= $content;
                $html .= file_get_contents('build/include/footer')."\n";
                
                file_put_contents('projects/'.$folder.'/index.html',$html);
            
                echo "1";
            
            }else{
                
                echo "0";
                
            }
            
        }
        
?>